<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// Main Laravel route will redirect to Sammy application.

Route::get('/', function(){
	return redirect('index.html');
});

// Home route.

Route::get('/home.json', 'HomeController@viewHome');

// Registration routes.

Route::post('/register.json', 'Auth\AuthController@postRegister');

// Authentication routes.

Route::post('/login.json', 'Auth\AuthController@postLogin');
Route::get('/logout.json', 'Auth\AuthController@getLogout');

// User routes.

Route::get('/user.json', 'UserController@readOne');
Route::put('/userUpdate.json', 'UserController@update');

// Notes routes.

Route::get('/readMany.json', 'NoteController@readMany');
Route::get('/readOne.json', 'NoteController@readOne');
Route::post('/create.json', 'NoteController@create');
Route::put('/update.json', 'NoteController@update');
Route::delete('/delete.json', 'NoteController@delete');