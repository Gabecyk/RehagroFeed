<?php

namespace App\Http\Controllers\Api;

use App\Api\ApiMessages;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    private $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = $this->user->paginate(10);

        return response()->json($users, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();

        //verifica se tem o campo senha
        if(!$request->has('password') || !$request->get('password')){
            $message = new ApiMessages('A password must be sent');
            return response()->json($message->getMessage(), 401);
        }

        try {
            $data['password'] = bcrypt($data['password']);

            $user = $this->user->create($data);

            return response()->json([
                'message' => 'Usuário registrado! Volte para a tela de login para logar.'
            ], 200);

        } catch (\Exception $ex) {
            $message = new ApiMessages($ex->getMessage());
            return response()->json($message->getMessage(), 401);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $user = $this->user->findOrFail($id);

            return response()->json($user);
        } catch (\Exception $ex) {
            $message = new ApiMessages($ex->getMessage());
            return response()->json($message->getMessage(), 401);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data = $request->all();

        if($request->has('password') && $request->get('password')){
            $data['password'] = bcrypt($data['password']);
        } else {
            unset($data['password']);
        }

        try {

            $user = $this->user->findOrFail($id);
            $user->update($data);

        } catch (\Exception $ex) {

            $message = new ApiMessages($ex->getMessage());
            return response()->json($message->getMessage(), 401);

        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $user = $this->user->findOrFail($id);
            $user->delete();

            return response()->json([
                'message' => 'Usuário deletado com sucesso!'
            ], 200);

        } catch (\Exception $ex) {
            $message = new ApiMessages($ex->getMessage());
            return response()->json($message->getMessage(), 401);
        }
    }
}
