<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TicketResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'type' => $this->type,
            'tier' => $this->tier,
            'price' => $this->price,
            'available_tickets'=>$this->available_tickets,
            'total_tickets_created'=>$this->total_tickets_created,

        ];
    }
}
