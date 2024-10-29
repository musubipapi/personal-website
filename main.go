package main

import (
	"embed"
	"io/fs"
	"net/http"
	"text/template"

	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware"
)

func IndexHandler(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("src/pages/index.html")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	err = tmpl.Execute(w, nil)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

//go:embed src/css/output.css
var outputCSS embed.FS

func main() {
	r := chi.NewRouter()
	r.Use(middleware.Logger)

	// Serve the embedded output.css file
	cssFS, _ := fs.Sub(outputCSS, "src/css")
	r.Handle("/css/*", http.StripPrefix("/css/", http.FileServer(http.FS(cssFS))))

	r.Get("/", IndexHandler)

	http.ListenAndServe(":3000", r)
}
