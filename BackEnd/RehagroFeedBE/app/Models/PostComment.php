<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PostComment extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'text',
        'post_id',
        'commented_by',
        'count_likes',
    ];

    /**
     * The post this comment belongs to
     */
    public function post()
    {
        return $this->belongsTo(Post::class);
    }

    /**
     * The user who made the comment
     */
    public function commenter()
    {
        return $this->belongsTo(User::class, 'commented_by');
    }

    /**
     * Likes on this comment
     */
    public function likes()
    {
        return $this->hasMany(UserLike::class, 'comment_id');
    }
}
