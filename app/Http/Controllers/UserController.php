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

		$user = User::findOrFail($id);

		return json_encode($user);

	}

}