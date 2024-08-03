{
  inputs = {
    flake-parts.url = "github:hercules-ci/flake-parts";
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
  };

  outputs = {flake-parts, nixpkgs, self, ...} @ inputs:
    flake-parts.lib.mkFlake {inherit inputs;} {
      systems = ["x86_64-linux" "aarch64-linux" ];
      perSystem = {
        pkgs,
        system,
        ...
      }: {
        _module.args.pkgs = import nixpkgs { inherit system; };

        devShells.default = pkgs.mkShell  {
          buildInputs = with pkgs; [just dart watchexec flatpak];
        };
      };
    };
}