function main() {
  const app = new App();

  app.bootstrap();

  while (true) {
    app.update();
    app.render();
  }

  app.shutdown();
}

main();
