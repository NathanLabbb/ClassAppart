<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
// @index sert a appeler la methode index de mon controller
Route::get('/products', [\App\Http\Controllers\ProductController::class, 'showProducts']);
Route::post('/addProducts', [\App\Http\Controllers\ProductController::class, 'addProducts']);
Route::put('/addProductInCart', [\App\Http\Controllers\ProductController::class, 'addProductInCart']);

