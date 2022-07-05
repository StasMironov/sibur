## Классы для установки внутренних и внешних отступов между компонентами

Для установки отступов между компонентами в поле 'offsets' нужно передать строку с утилитарными классами.
Например:

```
{
    block: {
        "class": "js-some-class",
        "offsets": "pt-lg-112 pt-md-80 pt-64",
        "title": "Title",
        "text": "Some text"
    }
}

<div class="block
    {% if block.offsets %} {{ block.offsets }}{% endif %}
    {% if block.class %} {{ block.class }}{% endif %}">

	<div class="block__image">
		<img src="tmp/pic-1.jpg" alt="image alt">
	</div>

	<p class="block__title">{{block.title}}</p>
	<p class="block__text">{{block.text}}</p>
</div>
```

Список значений для утилитарных классов может выглядеть вот так:
```
[0, 8, 16, 24, 32, 40, 48, 64, 80, 88, 112, 128, 144]
```
В файле [spacing.scss](/src/scss/vars/spacing.scss) указаны доступные значения


// TODO ....
