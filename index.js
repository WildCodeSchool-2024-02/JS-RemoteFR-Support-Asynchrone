/**
 * Ici, date est une promesse qui est résolue si le tournoi est vrai et rejetée si le tournoi est faux.
 */
const date = new Promise(function (resolve, reject) {
	// tournoi est une variable qui détermine si le tournoi est vrai ou faux.
	// Ici, c'est un exemple, donc on a mis false pour simuler un cas où le tournoi est annulé.
	const tournoi = false;
	if (tournoi) {
		const dateDetails = {
			name: "Tournoi d'échecs",
			location: "Marseille",
			table: 1,
		};

		resolve(dateDetails);
	} else {
		reject(new Error("Tournoi annulé !"));
	}
});

/**
 * Ici, callMyMom est une promesse qui est forcément résolue avec un message.
 */
const callMyMom = function (dateDetails) {
	return new Promise(function (resolve, reject) {
		const message = `Vite maman ! Amène-moi à ${dateDetails.location}, j'ai un tournoi !`;
		resolve(message);
	});
};

/**
 * La fonction `myDate` est une fonction qui utilise les promesses pour afficher un message. Nous utilisons la syntaxe `.then()` pour chaîner les promesses.
 */
/**
 * Cette méthode est la 1er façon de faire une promesse, il est préférable de faire la 2ème façon. Pour la lisibilité du code.
 */
const myDate = function () {
	date.then((res) => {
		console.log(res);
		return res;
	})
		.then(callMyMom)
		.then((res) => console.log(res))
		.catch(function (error) {
			console.log(error.message);
		});
};

/**
 * La même fonction que `myDate` mais avec la syntaxe `async/await`.
 * Cette syntaxe est plus lisible et plus facile à comprendre.
 */
async function myDate2() {
	try {
		let dateDetails = await date;
		let message = await callMyMom(dateDetails);
		console.log(message);
	} catch (error) {
		console.log(error.message);
	}
}

myDate2();
