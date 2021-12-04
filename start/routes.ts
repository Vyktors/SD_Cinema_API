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

Route.get('/test', 'FilmsController.getComingFilmThumbnails')

Route.get('/film/:id', 'FilmsController.getFilm')
Route.get('/films/airing', 'FilmsController.getAiringFilmThumbnails')
Route.get('/films/upcoming', 'FilmsController.getComingFilmThumbnails')

Route.get('/rep', async () => {
  return Representation.query().preload('film', (preloadQuery) => {
    preloadQuery.preload('genre')
  })
})

Route.get('/billets', 'InformationController.getBilletsSorted')
Route.get('/nourriture', 'InformationController.getNourriture')
Route.get('/cadeau', 'InformationController.getCadeau')

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
