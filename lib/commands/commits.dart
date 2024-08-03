import 'package:args/command_runner.dart';
import 'package:io/ansi.dart';

class CommitsCommand extends Command {
  @override
  final name = "commits";
  @override
  final description = "View commits for a package";

  @override
  void run() {
    print(white.wrap("Test"));
  }
}
