<template>
    <UPageSection
        id="info"
        title="Informácie"
        description="Okolité lesy nám poskytujú kvalitnú surovinu, ktorú spracúvame šetrne a zodpovedne. Naše drevo je dôkladne vysušené, preto horí čisto, dlho a s vysokou výhrevnosťou. Menej dymí, šetrí váš komín aj kachle a vo vašej domácnosti vydrží viac tepla na menej dreva. Je to spoľahlivé, lokálne palivo pre slovenské domácnosti."
        icon="i-lucide-box"
        orientation="horizontal"
        :features="features"
        :reverse="true"
    >
        <img
            src="/images/info.webp"
            alt="rozmery palety palivoveho dreva"
            class="aspect-square object-cover rounded-lg shadow-2xl ring ring-default"
        />
    </UPageSection>
</template>

<script lang="ts" setup>
    const features = ref([
        {
            title: "Cena",
            description: "???€ ... 1 paleta (???kg)",
            icon: "i-lucide-star"
        },
        {
            title: "Doprava",
            description: "Dovoz po dohode zabezpečím Spišská Nová Ves a okolie.",
            icon: "i-lucide-truck"
        },
        {
            title: "+421 948 121 289",
            icon: "i-lucide-phone",
            to: "tel:+421948121289"
        },
        {
            title: "farmahamorsro@gmail.com",
            icon: "i-lucide-mail",
            to: "mailto:farmahamorsro@gmail.com",
            description: "V prípade otázok nás neváhajte kontaktovať."
        }
    ]);
</script>