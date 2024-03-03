<?php

namespace App\Http\Controllers;

use App\Models\Users;
use Illuminate\Http\Request;
use League\Flysystem\UrlGeneration\PublicUrlGenerator;
use Storage;

// use Illuminate\Support\Facades\Storage;

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
    public function edit_user(Request $request)
    {

        $image = $request->file('image');


        $image_path = $request->file('image')->store('local');


        return var_dump($image_path);

    }




}
