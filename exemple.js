/**
 * Création d'une promesse
 *
 * Le mot clé `new` est utilisé pour créer une nouvelle instance de `Promise`.
 * Celle ci prend en paramètre une fonction qui prend deux paramètres `resolve` et `reject`.
 *
 */
const promise = new Promise(function (resolve, reject) {
	const isBG = true;

	if (isBG) {
		const trainer = {
			name: "ayoub",
			lastname: "le bg",
		};

		// La promesse est résolue avec le paramètre `trainer`.
		resolve(trainer);
	} else {
		// La promesse est rejetée avec un message d'erreur.
		reject(new Error("Ah bas non, c'est Antho"));
	}
});

/**
 * Utilisation de la promesse
 */
promise
	.then((response) => console.log(response))
	.catch((err) => console.error(err));
