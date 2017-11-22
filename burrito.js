// Burrito API Key
const trelloAPIKey = "6f2d6d390eba278e1a77acaa01d60145";
// Create Element Helper
const ce = React.createElement;

// Make sure we have what we need in local storage, otherwise we'll do something else
if( localStorage.getItem('trello-token') && localStorage.getItem('trello-id') ) {
	// Setup som Variables.
	const trelloAPIToken = localStorage.getItem('trello-token');
	var boards;
	var cards;

	// Create Links to Cards
	const cardLink = function(props){
		var boardName = boards.find(function(item){
			return item.id === props.idBoard;
		}).name;

		return(
			ce('a', { href: props.url, tabIndex: 2, target: '_blank', 'aria-label': `Card: ${props.name} - Board: ${boardName}` }, ce('b', null, props.name), ce('span', null, boardName) )
		);
	}

	// Create an unordered list of links of cards.
	const assignedCards = function(props) {
		var listItemsArr = [];
		if(props.items) {
			props.items.map(function(itemData){
				listItemsArr.push(ce('li', { key: itemData.id, data: itemData }, cardLink( itemData ) ) );
			});
		}
		return(
			ce('ul', { 'tabIndex': 1, key: props.key, 'aria-label': 'Trello Cards to which you are assigned.', 'aria-live': 'polite', 'aria-relevant': 'additions removals', 'aria-atomic': 'true' }, listItemsArr)
		);
	}

	// Create a title.
	const title = function(props) {
		return(
			ce('h2', { id: 'list-id' }, props.name )
		);
	}

	function logOut() {
		localStorage.removeItem('trello-token');
		localStorage.removeItem('trello-id');
		window.location.reload();
	}

	// Run it, baby.
	function runApp() {
		ReactDOM.render(
			[
			title({name: 'My Cards'}),
			assignedCards( { key: 'assigned', items: cards }),
			ce('a', { key: 'logout-link', id: 'logout-link', onClick: logOut, href: '', 'aria-label': 'Log Out of Burrito' }, 'Log Out')],
			document.getElementById('burrito-app')
		);
	}

	// Fetch Cards
	function loadCards() {
		fetch(`https://api.trello.com/1/batch?urls=/members/${localStorage.getItem('trello-id')}/boards,/members/${localStorage.getItem('trello-id')}/cards&key=${trelloAPIKey}&token=${trelloAPIToken}`).then(function(res){
			res.json().then(function(data){
				boards = data[0][200];
				cards = data[1][200];
				runApp();
			});
		});
	}

	loadCards(); // Start it up, Johnny.
	setInterval(loadCards, 2000); // Refresh automatically every two seconds.

} else {
	if((window.location.href).split('=')[1]) { // If a token has been passed in the url.
		localStorage.setItem('trello-token', (window.location.href).split('=')[1]); // Split the token up and save it.
		// Fetch the user profile from the token.
		fetch(`https://api.trello.com/1/tokens/${localStorage.getItem('trello-token')}/member?key=${trelloAPIKey}&token=${localStorage.getItem('trello-token')}`).then(function(res){
			res.json().then(function(data){
				// Save the User's ID
				localStorage.setItem( 'trello-id', data.id );
				window.location.href = window.location.href.split('#')[0];
			});
		});
	}
	// If there is not a token.
	ReactDOM.render(
		// Show the Login link.
		ce('a', { id: 'login', href: `https://trello.com/1/authorize?expiration=never&name=Burrito&key=${trelloAPIKey}&return_url=${window.location.href}`, 'aria-label': 'Login with Trello' }, 'Login with Trello' ),
		document.getElementById('burrito-app')
	);
}
