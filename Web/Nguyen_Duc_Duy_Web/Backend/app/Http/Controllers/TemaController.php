<?php

namespace App\Http\Controllers;

use App\Models\Tema;
use Illuminate\Http\Request;

class TemaController extends Controller
{
    public function index(){
        $temak = response()->json(Tema::all());
        return $temak;
    }
    public function show($id){
        $temak = response()->json(Tema::find($id));
        return $temak;
    }
}
