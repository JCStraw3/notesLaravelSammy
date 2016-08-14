<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Note;

class NoteController extends Controller {

	public function create(Requests\CreateNoteRequest $request){

		$note = new Note([
			'title' => $request->title,
			'body' => $request->body,
		]);

		$note->save();

		return json_encode($note);

	}

	public function readMany(){

		$notes = Note::latest()->get();

		return json_encode($notes);

	}

	public function readOne(Request $request){

		$id = $request->input('id');

		$note = Note::findOrFail($id);

		return json_encode($note);

	}

	public function update(Requests\UpdateNoteRequest $request){

		$id = $request->id;

		$note = Note::findOrFail($id);

		$note->update([
			'title' => $request->title,
			'body' => $request->body,
			'updated_at' => $request->updated_at,
		]);

		return json_encode($note);

	}

	public function delete(Requests\DeleteNoteRequest $request){

		$id = $request->id;

		$note = Note::findOrFail($id);

		$note->delete($note);

	}

}