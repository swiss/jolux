# Abstraction Levels

In JOLux, all the different legislative resources are usually described through **three different levels of abstraction**. These levels are necessary to be able to reference legislative resources either depending on language and file format or not.

## Work, Expression and Manifestation

:::{admonition} jolux:Work
:class: note
:name: Work
The owl:Class **jolux:Work** is a general abstraction for all the different legislative resources in JOLux. All the objects with type jolux:Work have additional types added to differentiate between the diverse legislative resources. 

As jolux:Work is a general abstraction, the jolux:Work is *language and file-format agnostic*.
:::

:::{admonition} jolux:Expression
:class: note
:name: Expression
The owl:Class **jolux:Expression** is a *language specific* representation of a jolux:Work. The jolux:Expression is *file-format agnostic*.
:::

:::{admonition} jolux:Manifestation
:class: note
:name: Manifestation
The owl:Class **jolux:Manifestation** is a *file-format specific* representation of a jolux:Expression entity. So an jolux:Manifestation is a *language and file-format specific* representation of a jolux:Work.
:::

So basically, [jolux:Work](#Work), [jolux:Expression](#Expression) and [jolux:Manifestation](#Manifestation) always come together to form a rich representation of a legislative resource. 

## Object Properties

The vocabulary used to connect these abstraction levels is as following:

:::{admonition} jolux:isRealizedBy
:class: note
:name: isRealizedBy
The object property **jolux:isRealizedBy** points from a [jolux:Work](#Work) to a [jolux:Expression](#Expression).
:::

:::{admonition} jolux:isEmbodiedBy
:class: note
:name: isEmbodiedBy
The object property **jolux:isEmbodiedBy** points from a [jolux:Expression](#Expression) to a [jolux:Manifestation](#Manifestation).
:::

:::{admonition} jolux:isExemplifiedBy
:class: note
:name: isExemplifiedBy
The object property **jolux:isExemplifiedBy** points from a [jolux:Manifestation](#Manifestation) to an object that represent the URL of the actual document.
:::

The following figure shows the different abstraction levels and the object properties to connect them:

:::{figure-md} abs_levels
![](img/abstraction_levels.svg)

Relation between jolux:Work, jolux:Expression und jolux:Manifestation.
:::

## SPARQL Example

The following question uses the above introduced abstraction levels to drill down from the URI of the Federal Constitution in the [Official Compilation](official_compilation.md) to the link of the PDF document in German:

```sparql
PREFIX jolux: <http://data.legilux.public.lu/resource/ontology/jolux#>
SELECT * WHERE {
    <https://fedlex.data.admin.ch/eli/oc/1999/404> jolux:isRealizedBy ?expression.
    ?expression jolux:language <http://publications.europa.eu/resource/authority/language/DEU>;
        jolux:isEmbodiedBy ?manifestation.
    ?manifestation jolux:format <http://publications.europa.eu/resource/authority/file-type/PDF>;
        jolux:isExemplifiedBy ?url.
}
```
