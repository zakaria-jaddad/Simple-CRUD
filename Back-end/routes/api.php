<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

/* 
    Display all users from the database.
*/
Route::get('users', [UserController::class, 'index']);
Route::get('users/{id}', [UserController::class, 'show_user']);
Route::post('users/{id}', [UserController::class, 'edit_user']);

