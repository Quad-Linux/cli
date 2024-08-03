import 'package:args/command_runner.dart';
import 'package:io/ansi.dart';

class CommitsCommand extends Command {
  @override
  final name = "commits";
  @override
  final description = "View commits for a package";

  CommitsCommand() {
    // argParser.addOption(name)
  }

  @override
  void run() {
    print(red.wrap("Test"));
  }
}
