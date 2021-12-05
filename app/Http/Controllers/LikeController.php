<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Reply;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Symfony\Component\HttpFoundation\Response;

class LikeController extends Controller
{

    public function __construct()
    {
        $this->middleware('jwt' , ['except' => ['index' , 'show']]);
    }


    public function likeIt(Reply $reply)
    {
        $reply->likes()->create([
            'user_id' => '1'
        ]);

        return response()->json([
            'message' => 'Reply liked successfully',
            'status' => Response::HTTP_ACCEPTED
        ], Response::HTTP_ACCEPTED);
    }

    public function unLikeIt(Reply $reply)
    {
        $reply->likes()->where('user_id' , 1)->first()->delete();
    }
}
