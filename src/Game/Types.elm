module Game.Types exposing (..)

import Board exposing (Msg)
import Land exposing (Color)
import Tables exposing (Table)


type GameStatus
    = Paused
    | Playing
    | Finished


type alias Model =
    { table : Table
    , board : Board.Model
    , players : List Player
    , status : GameStatus
    , playerCount : Int
    , chatInput : String
    , chatBoxId : String
    }


type alias Player =
    { name : PlayerName
    , color : Color
    }


type alias PlayerName =
    String


type alias TableStatus =
    { players : List Player
    }