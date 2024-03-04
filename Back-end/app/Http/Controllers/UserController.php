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


        $image_path = $request->file('image')->store('public');

        // TODO: store the relative path of the profile image in the DB.
        $url = Storage::url($image_path);


        return json_encode(asset($url));

    }




}
