<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model as Eloquent;

class Ticket extends Eloquent
{
    use  HasFactory;

    protected $table = 'ticket';

    protected $fillable = ['name','type', 'tier', 'price','available_tickets','total_tickets_created'];

    public function scopeFilter($query, array $filters)
{
    $query->when($filters['search'] ?? null, function ($query, $search) {
        $query->where('name', 'like', '%'.$search.'%');
    })->when($filters['type'] ?? null, function ($query, $type) {
        if ($type === 'GA') {
            $query->where('type', 'GA');
        } elseif ($type === 'VIP') {
            $query->where('type', 'VIP');
        } elseif ($type === 'VVIP') {
            $query->where('type', 'VVIP');
        }
    });
}

}
