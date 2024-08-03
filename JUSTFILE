watch:
	watchexec -e dart just build

build:
	dart compile exe bin/cli.dart -o build/quad