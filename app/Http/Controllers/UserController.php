<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\User;

use Auth;

class UserController extends Controller {

	public function readOne(Request $request){

		$id = $request->input('id');

		$authuser = Auth::user();

		if(!$id){
			$id = $authuser->id;
		}

		$user = User::findOrFail($id);

		return json_encode($user);

	}

	public function update(Request $request){

		$id = $request->input('id');

		// TODO: Add authentication so logged in user can only update itself.

		$user = User::findOrFail($id);

		$user->update([
			'name' => $request->name,
			'email' => $request->email,
			'updated_at' => $request->updated_at,
		]);

		return json_encode($user);

	}

}