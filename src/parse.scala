import scala.io.Source
val file = Source.fromFile("nav.yml").toList
println(file)
