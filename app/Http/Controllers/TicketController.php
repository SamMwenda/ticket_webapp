<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use App\Models\EmailData;
use App\Mail\TicketMail;
use App\Http\Requests\TicketStoreRequest;
use App\Http\Requests\TicketUpdateRequest;
use App\Http\Resources\TicketCollection;
use App\Http\Resources\TicketResource;
use Inertia\Inertia;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;


class TicketController extends Controller
{

    //render welcome  ui
public function welcome()
    {
         return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
            'tickets' => new TicketCollection(
                Ticket::
                    orderBy('id')
                    ->get()
            ),
        ]);
    }

    //render dashboard  ui
public function dashboard()
    {
         return Inertia::render('Dashboard', [
            'tickets' => new TicketCollection(
                Ticket::
                    orderBy('id')
                    ->get()
            ),
        ]);
    }

//render admin tickets ui
public function index()
    {
        return Inertia::render('Admin/TicketsAdmin', [
            'filters' => Request::all('search', 'type'),
            'tickets' => new TicketCollection(
                Ticket::
                    orderBy('id')
                    ->filter(Request::only('search','type'))
                    ->paginate()
                    ->appends(Request::all())
            ),
        ]);
    }

//render customer ticket ui
public function showTicket()
    {
        return Inertia::render('TicketsPage', [
            'filters' => Request::all('search', 'type'),
            'tickets' => new TicketCollection(
                Ticket::
                    orderBy('id')
                    ->filter(Request::only('search','type'))
                    ->paginate()
                    ->appends(Request::all())
            ),
        ]);
    }

    //render a create ticket ui
    public function create()
    {
        return Inertia::render('Admin/Partials/TicketCreate');
    }

    //create and store a ticket
    public function store(TicketStoreRequest $request)
    {
        Ticket::create(
            $request->validated()
        );

        return Redirect::route('ticket.store')->with('success', 'Ticket created.');
    }

    //render edit ticket ui
    public function edit(Ticket $ticket)
    {
        return Inertia::render('Admin/Partials/TicketEdit', [
            'ticket' => new TicketResource(
                $ticket
            ),
        ]);
    }

    //update ticket admin
    public function update(Ticket $ticket, TicketUpdateRequest $request)
    {
        $ticket->update(
            $request->validated()
        );
        return Redirect::route('ticket')->with('success', 'Ticket updated.');
    }

    //update ticket after purchase
    public function updateAfterPurchase(Ticket $ticket, TicketUpdateRequest $request)
    {
        $ticket->update(
            $request->validated()
        );


    $emailData = new EmailData(
        $request->input('amount'),
        $request->input('price1'),
        $request->input('name'),
        $request->input('type'),
        $request->input('tier')
    );

    Mail::to($request->input('email'))->send(new TicketMail($emailData));

        return Redirect::route('showticket')->with('success', 'Ticket updated.');
    }

    //delete a ticket
    public function destroy(Ticket $ticket)
    {
        $ticket->delete();

        return Redirect::route('ticket')->with('success', 'Ticket deleted.');
    }
}



