<?php

namespace App\Http\Controllers;

use App\Models\Szavak;
use Illuminate\Http\Request;

class SzavakController extends Controller
{
    public function index(){
        $szavak = response()->json(Szavak::all());
        return $szavak;
    }
    public function show($id){
        $szavak = response()->json(Szavak::find($id));
        return $szavak;
    }
}
