<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserLike extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'post_id',
        'comment_id',
    ];

    /**
     * The post that was liked (if any)
     */
    public function post()
    {
        return $this->belongsTo(Post::class);
    }

    /**
     * The comment that was liked (if any)
     */
    public function comment()
    {
        return $this->belongsTo(PostComment::class, 'comment_id');
    }

    /**
     * The user who liked the post or comment
     */
    public function liker()
    {
        return $this->belongsTo(User::class, 'liked_by');
    }
}
