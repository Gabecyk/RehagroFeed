<?php

namespace App\Http\Controllers\Api\Auth;

use App\Api\ApiMessages;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LoginJwtController extends Controller
{
     public function login(Request $request)
    {
        $credentials = $request->all(['email', 'password']);

        Validator::make($credentials, [
            'email' => 'required|email',
            'password' => 'required|string'
        ])->validate();

        if (! $token = auth('api')->attempt($credentials)) {
            $message = new ApiMessages('Unauthorized'); //Modelo retorno de resposta
            return response()->json($message->getMessage(), 401);
        }

        return response()->json([
            'token' => $token,
        ], 200);
    }

    public function logout()
    {
        auth('api')->logout();
        
        return response()->json([
            'message' => 'Logout successfully!'
        ], 200);
    }
}
