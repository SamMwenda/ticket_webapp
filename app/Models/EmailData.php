<?php

namespace App\Models;

class EmailData
{
    public $amount;
    public $price;
    public $name;
    public $type;
    public $tier;

    /**
     * Create a new EmailData instance.
     *
     * @param int|string $amount
     * @param float $price
     * @param string $name
     * @param string $type
     * @param string $tier
     */
    public function __construct($amount, $price, $name, $type, $tier)
    {
        $this->amount = $amount;
        $this->price = $price;
        $this->name = $name;
        $this->type = $type;
        $this->tier = $tier;
    }
}
