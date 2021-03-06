<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Note extends Model {

	protected $table = 'notes';

	protected $fillable = [
		'title',
		'body',
	];

	// A note belongs to a user.

	public function user(){
		return $this->belongsTo('App\User');
	}

}