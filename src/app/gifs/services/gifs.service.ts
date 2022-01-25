import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey:string = 'hOZ2SWJGuFd7vl0T4uMUWlWxNNmutLKr';
  private _historial:string[] = [];

  get historial() {
    return [...this._historial];
  }

  buscarGifs(query:string = '') {

    query = query.trim().toLocaleLowerCase();

    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
    }
    // console.log(this._historial);

    fetch('https://api.giphy.com/v1/gifs/search?api_key=hOZ2SWJGuFd7vl0T4uMUWlWxNNmutLKr&q=goku&limit=10')
      .then( res => {
        res.json().then(data => console.log(data))
      })

  }


}
