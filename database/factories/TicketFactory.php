<?php

namespace Database\Factories;

use App\Models\Ticket;
use Illuminate\Database\Eloquent\Factories\Factory;

class TicketFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Ticket::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'id' => $this->faker->id,
            'type' => $this->faker->type,
            'tier' => $this->faker->tier,
            'price' => $this->faker->city,
            'available_tickets' => $this->faker->available_tickets,
            'total_tickets_created' => $this->faker->total_tickets_created,
        ];
    }
}


