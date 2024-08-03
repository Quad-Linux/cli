import 'package:args/command_runner.dart';
import 'package:cli/commands.dart';

void main(List<String> args) async {
  final runner = CommandRunner("quad", "The CLI tool for QuadOS");
  for (var command in commands) {
    runner.addCommand(command);
  }

  await runner.run(args);
}
