/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Database from '@ioc:Adonis/Lucid/Database'
import Film from 'App/Models/Film'
import Representation from 'App/Models/Representation'
import Billet from 'App/Models/Billet'
import FilmVedette from 'App/Models/FilmVedette'

Route.get('/Cont', 'FilmsController.getAiringFilms')

Route.get('/', async () => {
  return Film.query().preload('genre')
})

Route.get('/rep', async () => {
  return Representation.query().preload('film', (preloadQuery) => {
    preloadQuery.preload('genre')
  })
})

Route.get('/billets', 'BilletsController.getBilletsSorted')

Route.get('/vedette', async () => {
  return FilmVedette.query().preload('film1').preload('film2').preload('film3').preload('film4')
})

Route.get('/allo', async () => {
  const tab = ['un', 'deux']
  return { champ: tab }
})

/*
Un film
Films
Films en vedettes,
Film à venir
Prix billets
Nourritures
Carte cadeaux
Horaire pour la semaine
Horaire pour un film*/
