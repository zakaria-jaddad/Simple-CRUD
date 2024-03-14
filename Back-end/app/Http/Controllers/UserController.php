<?php

namespace App\Http\Controllers;

use App\Models\Users;
use Illuminate\Http\Request;
use League\Flysystem\UrlGeneration\PublicUrlGenerator;
use Mockery\Undefined;
use Storage;
use Symfony\Component\HttpFoundation\RateLimiter\RequestRateLimiterInterface;
use Validator;

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

        // getting users data
        $first_name = $request->input('firstName');
        $last_name = $request->input('lastName');
        $age = (int) $request->input('age');
        $status = $request->input('status');
        $sexe = $request->input('sexe');
        $image = $request->file('image');

        //  data validation 
        $user_data_validator = Validator::make($request->all(), [
            'firstName' => 'required|max:255',
            'lastName' => 'required|max:255',
            'age' => 'required|digits_between:1,100',
            'status' => 'required',
            'sexe' => 'required',
        ]);
        if ($user_data_validator->fails()) {
            return json_encode([400 => "Unable to process data"]);
        }

        $user = Users::find($request->id);
        // store new updated profile image
        if ($image !== null) {
            $image_validator = Validator::make($request->all(), [
                'image' => 'mimes:jpeg,png,jpg,gif'
            ]);
            if ($image_validator->fails()) {
                return json_encode([400 => "Unable to process image"]);
            }
            $image_path = $image->store("public");
            $user->update(['image_path' => asset(Storage::url($image_path))]);
        }

        $user->update([
            'first_name' => $first_name,
            'last_name' => $last_name,
            'age' => $age,
            'status' => $status,
            'sex' => $sexe,
        ]);
        return json_encode(["200" => 'User Got Updated Successfully']);

    }
    public function create_user(Request $request)
    {
        return json_encode(['200' => "Hello, World!!"]);
    }



}
