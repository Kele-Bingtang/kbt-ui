<script setup lang="ts">
import { useRouter } from 'vitepress'
import { useTranslation } from '../../composables/translation'

const router = useRouter()
const { switchLang, languageMap, langs, lang, locale } = useTranslation()

const toTranslation = () => {
  router.go(`/${lang.value}/guide/translation`)
}
</script>

<template>
  <div class="translation-container">
    <ClientOnly>
      <KDropdown popper-class="translation-popup" role="navigation">
        <KIcon :size="24" :aria-label="locale.language">
          <i-ri-translate-2 />
        </KIcon>
        <template #dropdown>
          <KDropdownMenu>
            <KDropdownItem
              v-for="l in langs"
              :key="l"
              :class="{ language: true, selected: l === lang }"
              @click="switchLang(l)"
            >
              {{ languageMap[l] }}
            </KDropdownItem>
            <KDropdownItem class="language selected" @click="toTranslation">
              {{ locale.help }}
            </KDropdownItem>
          </KDropdownMenu>
        </template>
      </KDropdown>
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/mixins' as *;
.translation-container {
  display: none;
  height: 24px;
  padding: 0 12px;

  @include respond-to('md') {
    display: block;
  }
}
</style>

<style lang="scss">
.k-dropdown__popper.translation-popup {
  --k-bg-color-overlay: var(--bg-color);
  --k-popper-border-radius: 8px;
  --k-border-color-light: transparent;

  padding: 7px 0;
  min-width: 192px;
  transition: background-color 0.5s;

  .k-popper__arrow {
    display: none;
  }

  .language {
    padding: 0 16px;
    line-height: 28px;
    &.selected {
      --k-text-color-regular: var(--brand-color);
    }
  }
}
</style>
