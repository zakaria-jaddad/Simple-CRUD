<?php

namespace App\Http\Controllers;

use App\Models\Users;
use Illuminate\Http\Request;
use League\Flysystem\UrlGeneration\PublicUrlGenerator;

class UserController extends Controller
{
    public function index()
    {
        $users = Users::all();

        return response()->json($users);
    }
    public function show_user($id)
    {
        $user = Users::find($id);

        return response()->json($user);
    }

    


}
