watch:
	watchexec -e dart just build

build:
	dart pub get && dart compile exe bin/cli.dart -o build/quad

flatpak:
	just build && flatpak run org.flatpak.Builder --force-clean --install-deps-from=flathub --repo=repo build/flatpak com.henryhiles.quados.Quad.yml

flatpak-build:
	just flatpak && flatpak build-bundle repo build/quad.flatpak com.henryhiles.quados.Quad --runtime-repo=https://flathub.org/repo/flathub.flatpakrepo