<?php

namespace App\Mail;

use App\Models\EmailData;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class TicketMail extends Mailable
{
    use Queueable, SerializesModels;

    public $emailData;

    /**
     * Create a new message instance.
     */
    public function __construct(EmailData $emailData)
    {
        $this->emailData = $emailData;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('mail.ticketmail')
                    ->with([
                        'amount' => $this->emailData->amount,
                        'price' => $this->emailData->price,
                        'name' => $this->emailData->name,
                        'type' => $this->emailData->type,
                        'tier' => $this->emailData->tier,
                    ]);
    }
}
