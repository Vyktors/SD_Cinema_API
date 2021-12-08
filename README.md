# SD_Cinema_API

## Étapes d'installation.

### Installer NodeJS
La version de NodeJS utilisée pour le développement est 16.13.0 (LTS). AdonisJS requiert, au minimum, la version 14.

### Récupérer les packages
Une fois le projet sur la machine, entrer cette commande dans un terminal à la racine du projet:

```
npm install
```

### Ajouter le fichier d'environnement
Ajouter le fichier ".env" à la racine du projet. Il doit contenir les informations suivantes, au minimum.
```
PORT=3333
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=C1k9OCbiORmGLQAFtqEBdr6k26BlMYaz
DRIVE_DISK=local

DB_CONNECTION=pg
PG_HOST=localhost
PG_PORT=5432
PG_USER=cinema_server
PG_PASSWORD=cinema
PG_DB_NAME=cinema
```

**NOTE: Les informations de ce fichier peuvent être modifiées, elles sont seulement indiquées à titre d'exemple.**

**NOTE2: En pratique, le contenu du fichier .env ne devrait pas être diffusé ainsi.**

### Installer PostgreSQL
La version de PostgreSQL utilisée en développement est 14.1. Le serveur devrait rouler à l'adresse et sur le port correspondant aux valeurs "PG_HOST" et "PG_PORT" du fichier .env, respectivement.

### Créer un utilisateur dans PostgreSQL
Dans pgAdmin4, suivre les étapes suivantes (une référence visuelle est disponible en dessous)

- Pour le serveur de base de données, faire un clique droit sur "Login/Group Roles", sélectionner "Create" puis "Login/Group Role"
- Dans l'onglet "General", remplir le champ "Name" avec la valeur de "PG_USER" du fichier .env.
- Dans l'onglet "Definition", remplir le champ "Password" avec la valeur de "PG_PASSWORD" du fichier .env.
- Dans l'onglet "Privileges", cocher l'option "Can login?".

![Guide création user](/assets/images/PgUser.png)


### Créer la base de données
Suivre les étapes suivantes (une référence visuelle est disponible en dessous)

- Pour le serveur de base de données, faire un clique droit sur "Databases", sélectionner "Create" puis "Database".
- Dans l'onglet "General", remplir le champ "Database" avec la valeur de "PG_DB_NAME" du fichier .env.
- Une fois la base de données créé, dérouler la catégorie "Schemas", faire un clique droit sur "Public" et sélectionner "Properties"
- Dans l'onglet "Security", ajouter une ligne avec le symbole "+", sélectionner le nom de l'utlisateur créé précédemment et cocher la case "USAGE".

![Guide création db](/assets/images/PgDB.png)

### Rouler les migrations
Dans un terminal à la racine du projet, rouler la commande suivante:
```
node ace migration:run
```

Cette commande exécutera tous les scripts de migration sur la base de données. Si les étapes précédentes ont été réalisées correctement, le terminal ne soulèvera pas de messages d'erreur.

La base de données devrait maintenant contenir les tables nécessaires.

### Rouler les seeders
Dans un terminal à la racine du projet, rouler la commande suivante:
```
node ace db:seed
```

Cette commande exécutera les scripts de seeders. Les tables de la base de données devraient maintenant être remplies avec des données.

### Lancer le serveur d'API
Dans un terminal à la racine du projet, rouler la commande suivante:
```
npm run dev
```

L'API devrait maintenant fonctionner à l'adresse et sur le port indiqué dans le fichier .env.

### Note

Si les seeders sont roulés plus d'une fois, les représentations seront insérées en doublon.

Pour remettre la base de données à 0, et la remplir par la suite, rouler les commandes suivantes.
```
node ace migration:rollback
node ace migration:run
node ace db:seed
```
