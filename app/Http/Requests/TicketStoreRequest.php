<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TicketStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => ['required'],
            'type' => ['required'],
            'tier' => ['required'],
            'price' => ['required'],
            'available_tickets' => ['required'],
            'total_tickets_created' => ['required'],
        ];
    }
}
