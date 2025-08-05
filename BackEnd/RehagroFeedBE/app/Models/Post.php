<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'text',
        'attachments',
        'count_likes',
        'created_by',
    ];

    protected $casts = [
        'attachments' => 'array',
    ];

    /**
     * The user who created this post
     */
    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    /**
     * Comments on this post
     */
    public function comments()
    {
        return $this->hasMany(PostComment::class);
    }

    /**
     * Likes on this post
     */
    public function likes()
    {
        return $this->hasMany(UserLike::class);
    }
}
