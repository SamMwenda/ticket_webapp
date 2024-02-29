<?php

use App\Http\Controllers\TicketController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/dashboard',[TicketController::class,'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/',[TicketController::class,'welcome'])->name('/');
Route::get('showticket',[TicketController::class,'showTicket'])->name('showticket');
Route::put('/showticket/{ticket}',[TicketController::class,'updateAfterPurchase'])->name('showticket.update');

//Ticket
Route::middleware('auth')->group(function () {
Route::get('ticket',[TicketController::class,'index'])->name('ticket');
Route::get('/ticket/create',[TicketController::class,'create'])->name('ticket.create');
Route::post('/ticket',[TicketController::class,'store'])->name('ticket.store');
Route::get('/ticket/{ticket}/edit',[TicketController::class,'edit'])->name('ticket.edit');
Route::put('/ticket/{ticket}',[TicketController::class,'update'])->name('ticket.update');
Route::delete('/ticket/{ticket}',[TicketController::class,'destroy'])->name('ticket.destroy');

});

require __DIR__.'/auth.php';
