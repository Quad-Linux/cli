import 'package:args/command_runner.dart';
import 'package:io/ansi.dart';

class RebuildCommand extends Command {
  @override
  final name = "rebuild";
  @override
  final description = "Rebuild your QuadOS system.";

  @override
  void run() {
    print(white.wrap("Test"));
  }
}
