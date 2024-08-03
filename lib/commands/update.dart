import 'package:args/command_runner.dart';
import 'package:io/ansi.dart';

class UpdateCommand extends Command {
  @override
  final name = "update";
  @override
  final description = "Update package lock";

  @override
  void run() {
    print(red.wrap("Test"));
  }
}
