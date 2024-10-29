.PHONY: all clean build-frontend install dev

all: build-frontend

dev:
	air && cd frontend && pnpm dev

build:
	go build -o build/server main.go

clean:
	rm -rf build/