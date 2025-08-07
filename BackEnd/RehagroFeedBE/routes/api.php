<?php

use App\Http\Controllers\Api\Auth\LoginJwtController;
use App\Http\Controllers\Api\UserController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('/rf')->group(function () {

    Route::middleware(['auth:api'])->get('/me', function (Request $request) { //rota JWT autenticar
        return response()->json($request->user());
    });
    Route::post('/login', [LoginJwtController::class, 'login'])->name('login');
    Route::post('/register', [UserController::class, 'store'])->name('register');


    Route::group(['middleware' => ['auth:api']], function () { //Rotas protegidas aqui dentro
        Route::prefix('feed')->group(function () {

            Route::post('/logout', [LoginJwtController::class, 'logout'])->name('logout');
            Route::post('/delete', [UserController::class, 'destroy'])->name('delete');
            Route::get('/', [UserController::class, 'index']);
        });
    });
});
